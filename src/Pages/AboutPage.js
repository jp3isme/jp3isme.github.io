import React from 'react';
import Bio from './HomePageComponents/Bio';
import Button from '../Components/Button';

export default function AboutPage() {
    return (
        <div className="container">
            <Bio />
            <Button to="/" onClick={window.scrollTo(0, 0)}>
                Go Home
            </Button>
        </div>
    );
}
