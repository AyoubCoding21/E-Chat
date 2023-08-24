<script lang='ts'>
    import Register from "./components/Register.svelte";
    import Chat from "./components/Chat.svelte";
    import { currentUser } from "./lib/pocketbase-config";

  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
</script>

<body>
    <h1>E-Chat</h1>
    <Register />

    {#if $currentUser}
      <Chat scrollToBottom={scrollToBottom} />
    {/if}
</body>

<style>
    h1
    {
        color: white;
    }
</style>
