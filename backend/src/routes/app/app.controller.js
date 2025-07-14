import Role from '../../models/db/role.model.js';
import Permission from '../../models/db/permission.model.js';
import { toSnakeCase } from '../../libs/util.js';
import { roles } from './starter-roles.js';
import {
  allGrantedPermissions,
  defaultGrantedPermissions,
  permissions,
} from './starter-permissions.js';
import { categories, tags } from './starter-module.js';
import SoalCategory from '../../models/db/soalCategory.model.js';
import SoalTag from '../../models/db/soalTag.model.js';

export const initRole = async (req, res) => {
  try {
    // 1. Definisikan role beserta deskripsinya
    const operations = roles().map((role) => ({
      updateOne: {
        filter: { _id: toSnakeCase(role.name) },
        update: {
          $setOnInsert: {
            _id: toSnakeCase(role.name),
            name: role.name,
            description: role.description,
          },
        },
        upsert: true,
      },
    }));

    const result = await Role.bulkWrite(operations);

    // 2. Definisikan permission default untuk role "Guru"
    const guruPermissionNames = defaultGrantedPermissions().map((p) => toSnakeCase(p));
    // 3. Ambil _id dari setiap permission yang didefinisikan di atas
    const guruPermissions = await Permission.find({ _id: { $in: guruPermissionNames } }).select(
      '_id'
    );
    var permissionIds = guruPermissions.map((p) => p._id);

    // 4. Tetapkan permission tersebut ke role "Guru"
    // Menggunakan $addToSet untuk menghindari duplikasi jika endpoint dijalankan berkali-kali
    if (permissionIds.length > 0) {
      await Role.updateOne(
        { name: 'Guru' },
        { $addToSet: { permissions: { $each: permissionIds } } }
      );
    }

    // 2. Definisikan permission default untuk role "Guru"
    const adminPermissionNames = allGrantedPermissions().map((p) => toSnakeCase(p));
    // 3. Ambil _id dari setiap permission yang didefinisikan di atas
    const adminPermissions = await Permission.find({ _id: { $in: adminPermissionNames } }).select(
      '_id'
    );
    permissionIds = adminPermissions.map((p) => p._id);

    // 4. Tetapkan permission tersebut ke role "Guru"
    // Menggunakan $addToSet untuk menghindari duplikasi jika endpoint dijalankan berkali-kali
    if (permissionIds.length > 0) {
      await Role.updateOne(
        { name: 'Admin' },
        { $addToSet: { permissions: { $each: permissionIds } } }
      );
    }

    res.status(200).json({
      message: 'Roles initialization and default permissions assignment complete.',
      createdCount: result.upsertedCount,
      matchedCount: result.matchedCount,
      guruPermissionsAssigned: permissionIds.length,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to initialize roles or assign permissions', error: error.message });
  }
};

export const initPermission = async (req, res) => {
  try {
    const operations = permissions().map((p) => ({
      updateOne: {
        filter: { _id: toSnakeCase(p.name) },
        update: {
          $setOnInsert: {
            _id: toSnakeCase(p.name),
            name: p.name,
            category: p.category,
            description: p.description,
          },
        },
        upsert: true,
      },
    }));

    const result = await Permission.bulkWrite(operations);

    res.status(200).json({
      message: 'Permissions initialization complete.',
      createdCount: result.upsertedCount,
      matchedCount: result.matchedCount,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to initialize permissions', error: error.message });
  }
};

export const initModule = async (req, res) => {
  try {
    const operations = categories().map((c) => ({
      updateOne: {
        filter: { name: c.name },
        update: {
          $setOnInsert: { name: c.name, description: c.description },
        },
        upsert: true,
      },
    }));

    const operationsTag = tags().map((t) => ({
      updateOne: {
        filter: { name: t.name },
        update: {
          $setOnInsert: { name: t.name, description: t.description },
        },
        upsert: true,
      },
    }));

    const resultCat = await SoalCategory.bulkWrite(operations);
    const resultTag = await SoalTag.bulkWrite(operationsTag);

    res.status(200).json({
      message: 'Kategori dan Tag initialization complete.',
      createdCount: resultCat.upsertedCount + resultTag.upsertedCount,
      matchedCount: resultCat.matchedCount + resultTag.matchedCount,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to initialize Kategori dan Tag', error: error.message });
  }
};
