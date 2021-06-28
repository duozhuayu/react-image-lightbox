import * as React from 'react'

export interface ILightBoxProps {
    mainSrc: string;
    nextSrc?: string;
    prevSrc?: string;
    mainSrcThumbnail?: string;
    prevSrcThumbnail?: string;
    nextSrcThumbnail?: string;
    onCloseRequest(): void;
    onMovePrevRequest?(): void;
    onMoveNextRequest?(): void;
    onImageRotate?(deg: number): void;
    onImageLoad?(): void;
    onImageLoadError?(): void;
    imageLoadErrorMessage?: React.ReactNode;
    onAfterOpen?(): void;
    discourageDownloads?: boolean;
    animationDisabled?: boolean;
    animationOnKeyInput?: boolean;
    animationDuration?: number;
    keyRepeatLimit?: number;
    keyRepeatKeyupBonus?: number;
    imageTitle?: React.ReactNode | string;
    imageCaption?: React.ReactNode | string;
    imageCrossOrigin?: string;
    toolbarButtons?: React.ReactNode[];
    reactModalStyle?: React.CSSProperties;
    reactModalProps?: React.CSSProperties;
    imagePadding?: number;
    clickOutsideToClose?: boolean;
    enableRotate?: boolean;
    enableZoom?: boolean;
    wrapperClassName?: string;
    rotateLeftLabel?: string;
    rotateRightLabel?: string;
    nextLabel?: string;
    prevLabel?: string;
    zoomInLabel?: string;
    zoomOutLabel?: string;
    closeLabel?: string;
}

export default class Lightbox extends React.Component<ILightBoxProps, never> { }
