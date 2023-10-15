<script lang='ts'>
  import { onMount, onDestroy, afterUpdate } from 'svelte';
  import Avatar from './Avatar.svelte';
  import { currentUser, pb } from '../lib/pocketbase-config';
  let newMessage: string;
  let messages: any[] = [];
  let unsubscribe: () => void;
  let messagesContainer: HTMLDivElement = null;
  onMount(async () => {
    const resultList = await pb.collection('messages').getList(1, 50, {
      sort: 'created',
      expand: 'user',
    });
    messages = resultList.items;
    unsubscribe = await pb.collection('messages').subscribe('*', async ({ action, record }: any) => {
      if (action === 'create') {
        const user = await pb.collection('users').getOne(record.user);
        record.expand = { user };
        messages = [...messages, record];
      }
      if (action === 'delete') {
        messages = messages.filter((m) => m.id !== record.id);
      }
    });
  });

  const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  }; 

  onDestroy(() => {
    unsubscribe?.();
  });

  async function sendMessage() {
    if ($currentUser) {
      const data = {
        text: newMessage,
        user: $currentUser.id,
      };
      const createdMessage = await pb.collection('messages').create(data);
      newMessage = '';
    } else {
      console.error('User not found please login or sign up');
    }
  }

  afterUpdate(() => {
        if (messages) window.scrollTo(0, document.body.scrollHeight)
  });

  $: if(messages && messagesContainer)
  {
    	scrollToBottom(messagesContainer);
  }
</script>

<div class="messages" bind:this={messagesContainer}>
  {#each messages as message (message.id)}
    <div class="msg">
      <Avatar width=64 round={true} userFullName={message.expand?.user?.username} class="avatar" />
      <div>
        <small>Sent by @{message.expand?.user?.username}</small>
        <p class="msg-text">{message.text}</p>
      </div>
    </div>
  {/each}
</div>

<form on:submit|preventDefault={sendMessage}>
    <input placeholder="Message" type="text" bind:value={newMessage} />
    <button type="submit">Send</button>
</form>

<style>
  /* Montserrat Font */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
  
  /* Global Styles */
  :global(body) {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #000000;
    color: #fff;
  }

  /* Component Styles */
  .messages {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .msg {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #110;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease-in-out;
  }

  .msg:hover {
      background-color: #FF5F1F;
      color: #000;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .msg-text {
    margin-top: 5px;
    font-size: 16px;
  }

  /* HTML element styles */
  form {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #fff;
    background-color: #000;
    font-family: 'Montserrat';
  }

  button[type="submit"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
    font-family: 'Montserrat';
  }

  button[type="submit"]:hover {
    background-color: #0056b3;
  }
</style>
