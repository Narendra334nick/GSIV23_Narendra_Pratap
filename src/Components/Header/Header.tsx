import classes from "../Header/Header.module.scss";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
//import SearchInput from '../SearchInput/SearchInput';

export default function Header() {
	const navigate = useNavigate();
	const navigation = (link: string) => {
		navigate(link);
	};
	return (
		<div className={classes["root"]}>
      {/* <SearchInput /> */}
			<div className={classes["subRoot"]} 
      onClick={() => navigation("/")}
      >
				<HomeIcon color="disabled" sx={{ fontSize: 40 }}/>
			</div>
		</div>
	);
}
