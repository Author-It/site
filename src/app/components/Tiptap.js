
import React, { useEffect, useState, useCallback } from 'react'

import '../styles/tiptap.scss'
import { useEditor, EditorContent } from '@tiptap/react'

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Extentions
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Heading from '@tiptap/extension-heading'
import CharacterCount from '@tiptap/extension-character-count'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'

//React Icons
import { FaItalic, FaBold, FaStrikethrough, FaCode, FaListUl, FaListOl, FaQuoteRight, FaRuler, FaMixer, FaParagraph } from "react-icons/fa";
import { IoArrowUndoSharp, IoArrowRedoSharp } from "react-icons/io5";
import { BiCodeBlock } from "react-icons/bi";
import { AiOutlineCloudSync } from "react-icons/ai";
import { BsCloudCheck } from "react-icons/bs";
import Image from 'next/image'

// import axios
import axios from 'axios';


//Extension Configs
Color.configure({
  types: ['textStyle'],
})


Link.configure({
  scheme: 'tel',
  optionalSlashes: true,
  linkOnPaste: true,
  openOnClick: true,
  autolink: false,
  validate: href => /^https?:\/\//.test(href),
})

const limit = 5000

const MenuBar = ({ editor }) => {


  if (!editor) {
    return null
  }

  return (
    <>
      <div className='p-2 mx-2 mt-0.5 flex bg-[#202532] rounded-3xl'>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <FaBold className='m-1 mr-2 ml-4 text-white' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <FaItalic className='m-1 mr-2 text-white' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <FaStrikethrough className='m-1 mr-2 text-white' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          <FaCode className='m-1 mr-2 text-white' />
        </button>

        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          <FaParagraph className='m-1 mr-2 text-white' />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          <h3 className='m-1 mr-2 text-white'>H1</h3>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          <h3 className='m-1 mr-2 text-white'>H2</h3>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          <h3 className='m-1 mr-2 text-white'>H3</h3>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
        >
          <h3 className='m-1 mr-2 text-white'>H4</h3>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
        >
          <h3 className='m-1 mr-2 text-white'>H5</h3>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
        >
          <h3 className='m-1 mr-2 text-white'>H6</h3>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <FaListUl className='m-1 mr-2 text-white' />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <FaListOl className='m-1 mr-2 text-white' />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          <BiCodeBlock className='m-1 mr-2 text-white' />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <FaQuoteRight className='m-1 mr-2 text-white' />
        </button>

        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <FaRuler className='m-1 mr-2 text-white' />
        </button>

        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          <FaMixer className='m-1 mr-2 text-white' />
        </button>

        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          <IoArrowUndoSharp className='m-1 mr-2 text-white' />
        </button>

        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          <IoArrowRedoSharp className='m-1 mr-2 text-white' />
        </button>

        <input
          className='m-1 mr-2 text-white'
          type="color"
          onInput={event => editor.chain().focus().setColor(event.target.value).run()}
          value={editor.getAttributes('textStyle').color}
        />

        {/* <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
        <AiOutlineLink />
      </button> */}
      </div>
    </>
  )
}

const Tiptap = ({ id }) => {

  // setState
  const [Data, setData] = useState("Loading Data...");
  const [jsonData, setjsonData] = useState("");
  const [text, setText] = useState("");
  const [inputtxt, setinputtxt] = useState(""); // this is for title
  const [save, setSave] = useState(false); // this is for image3

  //save 
  const editor = useEditor({
    contentStyle: {
      height: '500px',
    },
    content: Data,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4, 5, 6] }
      }),
      Color,
      TextStyle,
      Placeholder.configure({
        placeholder: 'BLOG STUDIO EDITOR🌍',
      }),
      CharacterCount.configure({
        limit: 5000,
      }),
      Link.configure({
        openOnClick: false,
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
        class: 'my-custom-class',
      }),
    ],
  })

  //Toast Config
  const notify = () => {
    toast.success('Data Saved Successfully', {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  };

  // function to update the data
  const updateData = useCallback(async () => {
    setSave(true)
    try {
      const updatedData = {
        draftId: id,
        content: {
          title: inputtxt,
          body: editor?.getHTML(),
        },
      };
      const response = await axios.put('/api/op/drafts/', updatedData);
      // handle the response as needed
      setSave(false)
    } catch (error) {
      if (!error.response) {
        // network error
        console.log("network error");
      } else {
        console.log(error.response.data.message);
      }
    }
  }, [editor, id, inputtxt])

  // fetch the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/op/drafts/one/${id}`);
        setText(response.data.content.title); // Set the title from the JSON data
        setjsonData(response.data.content.body);
        setinputtxt(response.data.content.title);

      } catch (error) {
        if (!error.response) {
          // network error
          console.log("network error");
        } else {
          console.log(error.response.data.message);
        }
      }
    };

    fetchData();
  }, [id]);

  // update the data

  function handleInput(event) {
    setText(event.target.value);
    setinputtxt(event.target.value);
    if (event.target.value.length == 0) {
      event.target.style.width = "170px";
    } else {
      event.target.style.width = ((event.target.value.length + 3) * 8) + 'px';
      //event.target.style.width = event.target.value.length + 0 + "ch";
    }
  }

  useEffect(() => {
    setData(jsonData)
  }, [jsonData])


  useEffect(() => {
    if (editor) {
      editor.commands.setContent(Data);
    }
  }, [editor, Data]);

  // Listen for save combination
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Prevent the default browser save action
        // Run your logic here
        console.log('Ctrl+S pressed');
        notify()
        updateData()
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown); // Clean up the event listener on component unmount
    };
  }, [updateData]);

  // add 6sec countdown
  useEffect(() => {
    const interval = setInterval(() => {
      updateData()
    }, 6000);

    return () => clearInterval(interval);
  }, [updateData]);

  const btn_property = "text-white text-sm hover:bg-[#3F4146] pl-2 pr-2 rounded-md";

  return (
    <div className='bg-[#0C0F15]'>
      {/* Nav bar */}

      <nav className="bg-[#0C0F15] w-full h-[61px]">
        <div className='h-full items-center justify-between px-2 py-2 flex'>

          {/* left side */}
          <div className="flex items-center justify-center h-full">
            <Image src="/AuthorIt.png" alt="Logo" className="h-[18px] w-[80px] cursor-pointer" width={80} height={18} priority unoptimized />

            {/* MidBar */}
            <div className="flex flex-col  mb-auto ml-6 items-centre">

              {/* Up */}

              <div className="flex gap-4 pl-1" style={{ userSelect: 'none' }}>

                <input
                  type="text"
                  className="rounded h-[22px] min-w-[20px] pl-1 pr-1 text-white bg-transparent text-lg"
                  value={text}
                  onInput={handleInput}
                  placeholder="Untitled Document"
                />

                {/* <Image src="/cloud.png" alt="" onClick={() => { updateData(); notify(); }} className="h-[17px] w-[17px] bg-contain mt-[4px] cursor-pointer" width={20} height={20} priority unoptimized /> */}
                <div className="h-[15px] w-[15px] bg-contain mt-[4px] cursor-pointer text-white" onClick={() => { updateData(); notify(); }}>
                  {save ? <AiOutlineCloudSync /> : <BsCloudCheck />}
                </div>
                <Image src="/star.png" alt="" className="h-[15px] w-[15px] bg-contain mt-[4px] cursor-pointer" width={17} height={17} priority unoptimized />
                <Image src="/message.png" alt="" className="h-[17px] w-[17px] mt-[4px] bg-contain cursor-pointer" width={20} height={20} priority unoptimized />

                <div className='flex gap-4 items-centre justify-center'>

                </div>


              </div>

              {/* down */}
              {/* onDragStart={function meow() {reuturn false }} */}
              <div className="flex mb-0.5 mt-0.5 gap-[5px]" style={{ userSelect: 'none' }}>

                <button className="cursor-pointer">
                  <h3 className={btn_property}>File</h3>
                </button>

                <button>
                  <h3 className={btn_property}>Edit</h3>
                </button>

                <button>
                  <h3 className={btn_property}>View</h3>
                </button>

                <button>
                  <h3 className={btn_property}>Insert</h3>
                </button>

                <button>
                  <h3 className={btn_property}>Format</h3>
                </button>

                <button>
                  <h3 className={btn_property}>Tools</h3>
                </button>

                <button>
                  <h3 className={btn_property}>Settings</h3>
                </button>

                <button>
                  <h3 className={btn_property}>Help</h3>
                </button>


              </div>
            </div>
          </div>

          {/* right side */}

          <div className="h-[36px] flex items-centre">

            {/* Last Edited Code */}

            {/* Code here */}

            {/* PUBLISH Button Code */}
            <button className="flex gap-1 w-[115px] h-[36px] items-center text-white justify-center font-medium border-2 border-[#412BF1] rounded-[5px] bg-[#7651DF] outline-none border-none hover:bg-[#518ADF] transition-all transform duration-250 group">

              <p className="">
                PUBLISH
              </p>

              {/* to rotate object : ransition-all transform duration-500 cursor-pointer outline-none border-none group-hover:rotate-[360deg] */}
              <Image src="/send.png" alt="publish" className="mr-1" width={15} height={15} priority unoptimized />
            </button>

          </div>

        </div>
      </nav >
      {/* menu bar */}
      <MenuBar editor={editor} />

      <div className='flex flex-col h-[800px] bg-[#0C0F15]'>

        {/* Editor */}
        <div className='flex justify-centre mt-4'>
          <div className='w-[55%] h-[700px] align-middle justify-centre mx-auto bg-white text-black p-6 rounded-lg'>
            <EditorContent
              editor={editor}
              className="border-none"
            />
          </div>
        </div>

        {/* Other things at the bottom */}
        <div className='flex justify-around mb-2'>
          <div className="character-count text-[#6c6c6c] text-xs mt-2">
            {editor?.storage.characterCount.characters() || "0"}/{limit} characters
            <br />
            {editor?.storage.characterCount.words() || "0"} words
          </div>
          <ToastContainer pauseOnFocusLoss />
        </div>

      </div>

    </div>
  )
}

export default Tiptap