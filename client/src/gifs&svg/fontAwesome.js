import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const dotMenu = <FontAwesomeIcon icon={faEllipsisV} />;
export const messageIcon = <FontAwesomeIcon icon={faComments} />;
export const notificationIcon = <FontAwesomeIcon icon={faBell} />;
export const feedIcon = <FontAwesomeIcon icon={faNewspaper} />;
export const searchIcon = <FontAwesomeIcon icon={faSearch} />;
export const favIcon = <FontAwesomeIcon icon={faHeart} />;
export const editAvatar = <FontAwesomeIcon icon={faEdit} />;
export const confirm = <FontAwesomeIcon icon={faCheck} />;
export const cancel = <FontAwesomeIcon icon={faTimes} />;
