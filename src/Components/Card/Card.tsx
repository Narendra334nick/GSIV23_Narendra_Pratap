import { Box } from "@mui/material";
import classes from "./Card.module.scss";
import moment from "moment";

type cardPropType = {
	name: string;
	poster?: string;
	rating: string;
	description?: string;
  date?:string;
};

export default function Card(props: cardPropType) {
	const { name, poster, rating, description = "",date } = props;
	return (
		<div className={classes["root"]}>
			<Box>
				<img src={poster} alt="Poster Img" className={classes["bannerImg"]} />
			</Box>
			<Box display={"flex"} justifyContent={"space-between"}>
				<Box fontWeight={600}>{name}</Box>
				<Box>{rating}</Box>
			</Box>
      <Box fontSize={14} fontWeight={400} textAlign={'left'}>
				{moment(date).format('lll')}
			</Box>
			<Box fontSize={12} textAlign={"left"} mt={1}>{ description?.length > 100 ? description?.slice(0,100) : description }</Box>
		</div>
	);
}
