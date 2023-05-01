import React, {useCallback, useRef} from 'react'
import {WebCamHead, RadioIco, CamShot} from "../components-styles/WebCam-Style";
import Webcam from "react-webcam";
import {useDispatch} from "react-redux";
import { setCamImg} from "../features/camSlice";
import {useNavigate} from "react-router-dom";

const videoConstrain = {
    width: 250,
    height: 400,
    facingMode: 'user'
}

function WebCamCapture() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dir = '/preview';

    const webCamRef = useRef(null)
    // const [img, setImg] = useState('')
    const capture = useCallback(() => {
        const imageSrc = webCamRef.current.getScreenshot();
        dispatch(setCamImg(imageSrc))
        navigate(dir, {
            option: {
                state: ''
            }
        })
        // setImg(`${imageSrc}`)
    //    State testing
    }, [webCamRef])
    return (
        <WebCamHead>

            <CamShot>
                <Webcam audio={false} height={videoConstrain.height} ref={webCamRef}
                        width={videoConstrain.width}
                        screenshotFormat={"image/png"}
                        videoConstraints={videoConstrain}>
                </Webcam>

            </CamShot>


            <RadioIco onClick={capture}/>

            {/*<img src={} alt=""/> State testing*/}

        </WebCamHead>
    )
}

export default WebCamCapture
