"use client";
import Tiptap from '@component/components/Tiptap'
import { useRouter } from "next/navigation";
import Image from 'next/image'
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Blogs1({ params }) {
    const [jsonData, setjsonData] = useState("");
    const [text, setText] = useState("");
    const [inputtxt, setinputtxt] = useState("");

    const id = params.id;

    return (
        <>

            {jsonData !== null && <Tiptap id={id} />}

        </>
    )
}