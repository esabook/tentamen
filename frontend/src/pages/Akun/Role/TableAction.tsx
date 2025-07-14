import { roleStore } from '@/store/roleStore';
import { toast } from 'sonner';
import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';
import { rolePageStore } from './rolePageStore';
import type { Role } from '@/models/Role';

export default function TableAction() {
  const { roles, isLoading, setIsLoading, roleUpdate } = roleStore();
  const { isDirty, editedRoles, setEditedRoles } = rolePageStore();

  const handleSave = async () => {
    if (!editedRoles || !roles || isLoading) return;

    setIsLoading(true);
    const changedRoles = Array.from(editedRoles.values());

    if (changedRoles.length === 0) {
      setIsLoading(false);
      return;
    }

    try {
      const updatePromises = changedRoles.map((role) => roleUpdate(role));
      await Promise.all(updatePromises);

      setEditedRoles(new Map<string, Role>());
      setIsLoading(false);
      toast.success('Perubahan berhasil disimpan!');
    } catch (error) {
      setIsLoading(false);
      toast.error('Gagal menyimpan perubahan. Silakan coba lagi.');
    }
  };

  // console.log('TableAction(): ', id);
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Role & Permission Matrix</h1>
      {
        <Button onClick={handleSave} disabled={!isDirty || isLoading}>
          {isLoading ? <Loading /> : ''}
          {isLoading ? (isDirty ? 'Menyimpan...' : 'Memuat') : 'Save Changes'}
        </Button>
      }
    </div>
  );
}
