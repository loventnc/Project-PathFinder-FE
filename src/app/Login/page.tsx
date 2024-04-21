import React from 'react';

declare module 'react' {
    interface JSX {
        IntrinsicElements: {
            [elemName: string]: any;
        };
    }
}

"use client";

export const LoginPage = () => {
        return (
                <div>
                        <h1>Login</h1>
                </div>
        );
};
