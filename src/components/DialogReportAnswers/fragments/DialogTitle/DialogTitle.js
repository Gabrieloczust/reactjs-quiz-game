import PropTypes from "prop-types";

import { DialogTitle as DialogTitleMaterial, IconButton } from "@mui/material";
import { Close } from "@material-ui/icons";

export const DialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitleMaterial sx={{ m: 0, p: 2 }} {...other}>
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
          <Close />
        </IconButton>
      ) : null}
    </DialogTitleMaterial>
  );
};

DialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
