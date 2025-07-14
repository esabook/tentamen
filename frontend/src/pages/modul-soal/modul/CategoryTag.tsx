'use client';

import { useEffect, useState } from 'react';
import { useModuleStore } from './modulTableStore';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { useCategoryStore, useTagStore } from '@/pages/modul-soal/modul/categoryTagStore';
import { Badge } from '@/components/ui/badge';

export function Kategori() {
  const [open, setOpen] = useState(false);
  const { selectedCategory, setSelectedCategory } = useModuleStore();
  const { categories, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  console.log('Kategori');
  return (
    <div className="flex items-center space-x-4">
      <p className="text-muted-foreground text-sm">Kategori</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="justify-start">
            {selectedCategory ? <>{selectedCategory.name}</> : <>+ Pilih Kategori</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="bottom" align="start">
          <Command>
            <CommandInput placeholder="Pilih Kategori..." />
            <CommandList>
              <CommandEmpty>Tidak ada kategori yang tersedia.</CommandEmpty>
              <CommandGroup>
                {categories?.map((c) => (
                  <CommandItem
                    key={c._id}
                    value={c.name}
                    onSelect={(value) => {
                      setSelectedCategory(
                        categories.find((category) => category.name === value) || null
                      );
                      setOpen(false);
                    }}
                  >
                    {c.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function Tag() {
  const [open, setOpen] = useState(false);
  const { selectedTags, setSelectedTags } = useModuleStore();
  const { tags, fetchTags } = useTagStore();

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  console.log('Tag');
  return (
    <div className="flex items-center space-x-4">
      <p className="text-muted-foreground text-sm">Tag</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div>
            {selectedTags && selectedTags.length > 0 ? (
              selectedTags.map((tag) => (
                <Badge key={tag._id} className="mr-1">
                  {tag.name}
                </Badge>
              ))
            ) : (
              <>+ Pilih Tag</>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="bottom" align="start">
          <Command>
            <CommandInput placeholder="Pilih Tag..." />
            <CommandList>
              <CommandEmpty>Tidak ada Tag yang tersedia.</CommandEmpty>
              <CommandGroup>
                {tags?.map((t) => (
                  <CommandItem
                    key={t._id}
                    value={t.name}
                    onSelect={(value) => {
                      if (selectedTags.findIndex((tag) => tag.name === value) === -1) {
                        setSelectedTags(selectedTags.concat(t));
                      }
                      setOpen(false);
                    }}
                  >
                    {t.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
