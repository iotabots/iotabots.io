import React, { useEffect } from "react"
import * as S from "./Image.styles"

interface Props{
    imageUrl: string;
    imageWidth?: string;
    border_radius?: string;
    border?: string;
    imageHeight: string;
}


const Image: React.FC<Props> = ({ imageUrl, imageWidth, border_radius, border, imageHeight }) => {
        return <div>
            <S.Image src={imageUrl} style={{width: imageWidth, borderRadius: border_radius, border: border, height: imageHeight}}/>
    </div>
}

export default Image