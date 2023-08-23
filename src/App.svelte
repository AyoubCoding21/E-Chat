<script lang='ts'>
    import Register from "./components/Register.svelte";
    import Chat from "./components/Chat.svelte";
    import { currentUser } from "./lib/pocketbase-config";
</script>

<h1>E-Chat</h1>

<Register />

{#if $currentUser}
  <Chat />
{/if}

<style>
    h1
    {
        color: white;
    }
</style>
