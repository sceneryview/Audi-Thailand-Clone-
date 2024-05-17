'use client'
import React from "react";
import { useState} from "react";

async function Createversion({main,text,link,avatar}) {
  try {
    const response = await fetch('http://localhost:3333/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({main,text,link,avatar}),
      
    });
    console.log({main,text,link,avatar})
    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();

    if (data.status === 'login succuss') {
      window.location = './Adminpage';
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error.message);
    alert('Login failed');
    window.location = './Create';
  }
}
export default function page() {
  const [main, setMain] = useState('');
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Createversion({
        main,
        text,
        link,
        avatar
      });
    } catch (error) {
      console.error('Login error:', error.message);
      alert('Login failedddddd');
    }
  };
  return (
    <div>
      <div>
        <div className="pt-16 flex justify-center text-3xl">
          <h1>Create Content</h1>
        </div>
        <div className=" border bg-black"></div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mt-[44px] mb-[16px]">
              <div className="px-44 mb-10">
                <label htmlFor="text">Main Text:</label>
                <input type="text" id="main" name="main" onChange={(ev) =>setMain(ev.target.value)}/>
              </div>
              <div className="px-44 mb-10">
                <label htmlFor="text">Description:</label>
                <input type="text" id="text" name="text" onChange={(ev) =>setText(ev.target.value)}/>
              </div>
              <div className="px-44 mb-10">
                <label htmlFor="text">Link:</label>
                <input type="text" id="link" name="link" onChange={(ev) =>setLink(ev.target.value)}/>
              </div>
              <div className="px-44 mb-10">
                <label htmlFor="text">Image:</label>
                <input type="text" id="avatar" name="image" onChange={(ev) =>setAvatar(ev.target.value)}/>
              </div>
              <div className="flex object-cover justify-center">
                <button type="submit" className="bg-slate-400 w-[200px]">Enter</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
