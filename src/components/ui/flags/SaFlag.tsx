import React from 'react';

export const SaFlag = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="512" height="512" rx="256" fill="#006C35"/>
    <path d="M144.696 306.087c0 18.441 14.95 33.391 33.391 33.391h122.435c0 18.441 14.95 33.391 33.391 33.391h33.391c18.441 0 33.391-14.95 33.391-33.391v-33.391H144.696v0z" fill="#F0F0F0"/>
    <path d="M367.304 139.13H244.87c0-18.441-14.95-33.391-33.391-33.391h-33.391c-18.441 0-33.391 14.95-33.391 33.391v33.391h222.607v-33.391z" fill="#F0F0F0"/>
    <path d="M144.696 205.913h222.607v66.783H144.696z" fill="#F0F0F0"/>
  </svg>
);