import TextTruncate from 'react-text-truncate';
import { useState } from 'react';



const TruncateText = (props)=>{

	const [hasReadMoreOn,toggleReadMore] = useState(true);
    const style={'color' : '#337ab7', 'textDecoration' : 'underline', 'cursor' : 'pointer'}

    return (
    	<TextTruncate
            containerClassName={props.containerClassName}
            line={hasReadMoreOn?props.line:0}
            element={props.HTMLTag}
            truncateText='...'
            text={props.text}
            textTruncateChild={<span style={style}>{props.readMoreText?'Read More':''}</span>}
            onClick={()=>{
                if(hasReadMoreOn&&props.onClcickExpand){
                    toggleReadMore(!hasReadMoreOn)
                }
            }}
        />
    )

}

export default TruncateText;
 