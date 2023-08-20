import classes from "../Header/Header.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
//import SearchInput from '../SearchInput/SearchInput';

export default function Header() {
	const location = useLocation();

	// Extract the pathname from the location object
	const currentPath = location.pathname;
	const substring = "details";
	console.log("current", currentPath);

	const navigate = useNavigate();
	const navigation = (link: string) => {
		navigate(link);
	};
	return (
		<div className={classes["root"]}>
			{/* {currentPath.indexOf(substring) !== -1 ? <Box style={{float:'left'}}>Movie Details</Box> : null} */}
			<div className={classes["subRoot"]} onClick={() => navigation("/")}>
				<HomeIcon color="disabled" sx={{ fontSize: 40 }} />
			</div>
		</div>
	);
}
