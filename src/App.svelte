<script lang='ts'>
    import Register from "./components/Register.svelte";
    import Chat from "./components/Chat.svelte";
    import { currentUser } from "./lib/pocketbase-config";
    import { scrollTo } from 'svelte';
</script>

<body>
    <h1>E-Chat</h1>
    <Register />

    {#if $currentUser}
      <Chat on:messageAdded={() => scrollTo(document.body, document.body.scrollHeight)}/>
    {/if}
</body>

<style>
    h1
    {
        color: white;
    }
</style>
