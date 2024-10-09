import React, { useState, useEffect } from 'react';
import './Gallery.scss';

const totalImages = 48;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useSt