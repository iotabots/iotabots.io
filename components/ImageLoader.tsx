import React from 'react'
import * as S from './Image.styles'

interface Props{
    imageUrl: string;
    width?: string;
    borderRadius?: string;
    border?: string;
    height?: string;
}


const Image: React.FC<Props> = ({ imageUrl, width, 
    borderRadius, border, height }) => (    
        <div>
            <S.Image src={imageUrl} 
                style={{
                    width, 
                    borderRadius, 
                    border, 
                    height}}/>
        </div>
    )

Image.defaultProps = {
    width: '400px',
    borderRadius: '0px',
    border: 'none',
    height: '100%',
}


export default Image