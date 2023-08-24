<script lang='ts'>
    import Register from "./components/Register.svelte";
    import Chat from "./components/Chat.svelte";
    import { currentUser } from "./lib/pocketbase-config";
    let scrollToBottom = async (node) => {
        node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
    }; 
</script>

<body>
    <h1>E-Chat</h1>
    <Register />

    {#if $currentUser}
      <Chat on:sent-message={scrollToBottom} />
    {/if}
</body>

<style>
    h1
    {
        color: white;
    }
</style>
