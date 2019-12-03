import React,{ useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';


const TrackForm  = () => {
    const { 
        state: { name, recording, locations }, 
        startRecording, 
        stopRecording, 
        changeName } = useContext(LocationContext);
    
    const [saveTrack] = useSaveTrack();
        
    return(
        <>
            <Spacer>
                <Input value={name} onChangeText={ changeName } autoCorrect={false} autoCapitalize='none'  />
            </Spacer>
            { recording ? (
                <>
                     <Spacer>
                        <Button title="Stop Recording" onPress={stopRecording}/>
                    </Spacer>
                    
                </>
            ) : (
                <>
                    <Spacer>
                        <Button title="Start Recording" onPress={startRecording}/>
                    </Spacer>
                </>
            )}

            {!recording && locations.length ? (
            <>
                <Spacer>
                    <Button title="Save track" onPress={saveTrack}/> 

                    <Button title="Clean track" onPress={()=>{}}/> 
                </Spacer>
            </>
            ): null }
            
        </>
    );
};

export default TrackForm;

