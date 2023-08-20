import CircularProgress from "@mui/material/CircularProgress";
import classes from './Loader.module.scss';

export default function Loader() {
	return (
		<div className={classes["root"]}>
			<div>
				<CircularProgress size={70} />
			</div>
		</div>
	);
}
