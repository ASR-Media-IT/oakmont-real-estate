import React from 'react'

export default function Container({ children, className }) {
    return (
        <section className={`w-full max-w-7xl mx-auto px-4 py-10 lg:px-8 ${className}`}>
            {children}
        </section>
    )
}
