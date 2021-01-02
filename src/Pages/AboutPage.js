import React from 'react';
import Bio from './HomePageComponents/Bio';
import Button from '../Components/Button';

export default function AboutPage() {
    return (
        <div className="container">
            <Bio />
            <Button to="/">Go Home</Button>
        </div>
    );
}
