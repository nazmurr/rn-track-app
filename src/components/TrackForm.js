import React, { useState, useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
    <NavigationEvents onWillFocus={() => setFormSubmitted(false)} />
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter Name"
        />
        {recording ? (
          <Button
            title="Stop Recording"
            buttonStyle={{ backgroundColor: "red" }}
            onPress={stopRecording}
          />
        ) : (
          <Button
            title="Start Recording"
            disabled={!name ? true : false}
            onPress={startRecording}
          />
        )}
      </Spacer>
      {!recording && locations.length ? (
        <Spacer>
          <Button
            title="Save Recording"
            onPress={() => {
              setFormSubmitted(true);
              saveTrack();
            }}
            disabled={formSubmitted ? true : false}
            loading={formSubmitted ? true : false}
          />
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;
