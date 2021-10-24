import React, { useState } from "react";
import {
  styleContainer,
  ContainerBottom,
  Option,
  ContainerTop,
  ContainerInput,
} from "./style";
import { Avatar, Box } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { CustomInput } from "components";
// import { useStateValue } from "./StateProvider";
// import db, { collection, addDoc, serverTimestamp } from "./firebase";

const MessageSender = () => {
  //   const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // const collectionRef = collection(db, "posts");
    // const payload = {
    //   message: input,
    //   timestamp: serverTimestamp(),
    //   profilePic: user.photoURL,
    //   username: user.displayName,
    //   image: imageUrl,
    // };
    // await addDoc(collectionRef, payload).catch((error) => alert(error.message));
    // setInput("");
    // setImageUrl("");
  };
  return (
    <Box sx={styleContainer}>
      <ContainerTop>
        <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GjtAafcooDYxoFjSPf8BrwY16huXtqS4K3SpPiOyA=s96-c" />

        <ContainerInput>
          <form>
            <CustomInput placeholder={`¿Que estás pensando, Abraham Vidal?`} />
          </form>
        </ContainerInput>
        {/* <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (Optional)"
          /> */}
        {/* <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button> */}
      </ContainerTop>
      <ContainerBottom>
        <Option>
          <VideocamIcon style={{ color: "#E73F5A" }} />
          <h4>Video en vivo</h4>
        </Option>
        <Option>
          <PhotoLibraryIcon style={{ color: "#41B35D" }} />
          <h4>Foto/video</h4>
        </Option>
        <Option>
          <InsertEmoticonIcon style={{ color: "#EAB026" }} />
          <h4>Sentimiento/Actividad</h4>
        </Option>
      </ContainerBottom>
    </Box>
  );
};

export default MessageSender;
