'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateTagsAction(tags: string[]) {
  tags.forEach(t => {
    revalidateTag(t);
  });
}
