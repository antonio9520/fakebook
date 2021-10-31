import React from // , { useState }
"react";
import {
  styleContainer,
  ContainerBottom,
  styleOption,
  ContainerTop,
  ContainerInput,
} from "./style";
import { Avatar, Box, Button } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { CustomInput } from "components";
// import { useStateValue } from "./StateProvider";
// import db, { collection, addDoc, serverTimestamp } from "./firebase";

const MessageSender = () => {
  //   const [{ user }] = useStateValue();
  // const [input, setInput] = useState("");
  // const [imageUrl, setImageUrl] = useState("");

  // const handleSubmit = async (e: any) => {
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
  // };
  return (
    <Box sx={styleContainer}>
      <ContainerTop>
        <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GjtAafcooDYxoFjSPf8BrwY16huXtqS4K3SpPiOyA=s96-c" />

        <ContainerInput>
          <form>
            <CustomInput placeholder={`¿Que estás pensando, Abraham Vidal?`} />
          </form>
        </ContainerInput>
      </ContainerTop>
      <ContainerBottom>
        <Button
          sx={styleOption}
          startIcon={
            <VideocamIcon
              sx={{ color: "#E73F5A", width: "30px", height: "30px" }}
            />
          }
        >
          Video en vivo
        </Button>
        <Button
          sx={styleOption}
          startIcon={
            <PhotoLibraryIcon
              sx={{ color: "#41B35D", width: "30px", height: "30px" }}
            />
          }
        >
          Foto/video
        </Button>
        <Button
          sx={styleOption}
          startIcon={
            <InsertEmoticonIcon
              sx={{ color: "#EAB026", width: "30px", height: "30px" }}
            />
          }
        >
          Sentimiento/Actividad
        </Button>
      </ContainerBottom>
    </Box>
  );
};

export default MessageSender;
