"use client";
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default async function UnKnows() {
    redirect('/');

    useEffect(() => {
        redirect('/');
    }, [])

    return (
        <div>
            <h1>UnKnows</h1>
        </div>
    );
}