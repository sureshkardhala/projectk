import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {RxCross1} from "react-icons/rx"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function SmallScreenDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const handleClickOpen = (val) => {
    setValue(val);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="w-full flex flex-row justify-center text-sm text-gray-700  duration-300 py-2 px-6 space-x-10">
        <button onClick={() => handleClickOpen("signin")} className="hover:text-gray-400 duration-300">Signin</button>
        <button onClick={() => handleClickOpen("signup")} className="hover:text-gray-400 duration-300">Signup</button>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
       
        <DialogContent dividers>
          <div className="flex justify-end px-2 mb-4">
          <RxCross1 size={18} className="my-2 cursor-pointer hover:text-red-400 duration-300 " onClick={handleClose} />
          </div>
          {value === "signin" && <SignIn />}
          {value === "signup" && <SignUp />}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
