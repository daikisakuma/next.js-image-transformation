"use client";

import Konva from 'konva';
import React, { useEffect, useRef, useState } from 'react';
import { Image, Layer, Stage, Transformer } from 'react-konva';
import useImage from 'use-image';

const STAGE_WIDTH_SCALE = 0.9;
const STAGE_WIDTH       = window.innerWidth * STAGE_WIDTH_SCALE;
const IMAGE_WIDTH       = 1000;
const IMAGE_HEIGHT      = 500;
const IMAGE_SCALE       = (STAGE_WIDTH / IMAGE_WIDTH);
const IMAGE_URL         = `https://source.unsplash.com/collection/1346951/${IMAGE_WIDTH}x${IMAGE_HEIGHT}?1`;

const TransformationImage = () => {
    const [image]                     = useImage(IMAGE_URL);
    const imageRef                    = useRef<Konva.Image | null>(null);
    const trRef                       = useRef<Konva.Transformer | null>(null);
    const [isSelected, setIsSelected] = useState<boolean>(false);

    useEffect(() => {
        if (isSelected && !!trRef.current && !!trRef.current.getLayer() && !!imageRef.current) {
            trRef.current.nodes([imageRef.current]);
            (trRef.current.getLayer()!).batchDraw();
        }
    }, [isSelected, trRef]);

    const onSelect = () => {
        setIsSelected(state => !state);
    }

    const checkDeselect = (e: { target: { getStage: () => any; }; }) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setIsSelected(false);
        }
    };

    return (
        <div className='border-2 box-content border-slate-50'>
            <Stage
                width={STAGE_WIDTH}
                height={IMAGE_HEIGHT * IMAGE_SCALE}
                onMouseDown={checkDeselect}
                onTouchStart={checkDeselect}
            >
                <Layer>
                    <Image
                        ref={imageRef}
                        width={IMAGE_WIDTH}
                        height={IMAGE_HEIGHT}
                        scaleX={IMAGE_SCALE}
                        scaleY={IMAGE_SCALE}
                        image={image}
                        onClick={onSelect}
                        onTap={onSelect}
                        draggable
                    />
                    {isSelected &&
                        <Transformer
                            ref={trRef}
                            rotateEnabled={false}
                            boundBoxFunc={(oldBox, newBox) => {
                                if (Math.abs(newBox.width) < 10 || Math.abs(newBox.height) < 10) {
                                    return oldBox;
                                }
                                return newBox;
                            }}
                        />
                    }
                </Layer>
            </Stage>
        </div>
    )
}

export default TransformationImage