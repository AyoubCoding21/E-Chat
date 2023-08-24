<script lang='ts'>
  import { fly, slide } from 'svelte/transition';
  import { currentUser, pb } from '../lib/pocketbase-config';

  let username: string;
  let password: string;
  let email: string;

  async function login() {
    const user = await pb.collection('users').authWithPassword(username, password);
    console.log(user);
  }

  async function signUp() {
    try {
      const data = {
        username,
        email,
        password,
        passwordConfirm: password,
        name: 'user',
      };
      const createdUser = await pb.collection('users').create(data);
      await login();
    } catch (err) {
      console.error(err)
    }
  }

  function signOut() {
    pb.authStore.clear();
  }

</script>

<style>
  /* Montserrat Font */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
  /* Global Styles */
  :global(body) {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }

  /* Component Styles */
  form {
    width: 300px;
    margin: 20px auto;
    padding: 20px;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    font-family: 'Montserrat', sans-serif;
  }

  form.slide {
    transform: translateY(100%);
  }

  input[type="text"],
  input[type="password"],
  input[type="email"] {
    display: block;
    width: 100%;
    padding: 9px;
    margin-bottom: 9px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    font-family: 'Montserrat';
  }

  button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ffa401;
    color: #001;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    font-family: 'Montserrat';
  }

  button:hover {
    background-color: #0056b3;
  }

  p {
    margin: 20px auto;
    text-align: center;
  }
</style>

{#if $currentUser}
  <p>
    Signed in as {$currentUser.username} 
    <button on:click={signOut}>Sign Out</button>
  </p>
{:else}
  <form 
    on:submit|preventDefault 
    class:slide
    in:fly={{y: 0, duration: 300}}
    out:fly={{y: 100, duration: 300}}
  >
    <input
      placeholder="Username"
      required
      type="text"
      bind:value={username}
    />
    <input
      placeholder="E-Mail"
      required
      type="email"
      bind:value={email}
    />
    <input 
      placeholder="Password" 
      type="password" 
      required
      bind:value={password} 
    />
    <button on:click={signUp}>Sign Up</button>
    <button on:click={login}>Login</button>
  </form>
{/if}
