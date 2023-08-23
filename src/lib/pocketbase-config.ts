import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase('https://e-chat.pockethost.io'); 

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth: any) => {
    console.log('authStore changed', auth);
    currentUser.set(pb.authStore.model);
});
pb.autoCancellation(false);
