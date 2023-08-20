import { Box } from "@mui/material";
import classes from "./Card.module.scss";

type cardPropType = {
	name: string;
	poster?: string;
	rating: string;
	description?: string;
};

export default function Card(props: cardPropType) {
	const { name, poster, rating, description = "" } = props;
	return (
		<div className={classes["root"]}>
			<Box>
				<img src={poster} alt="Poster Img" className={classes["bannerImg"]} />
			</Box>
			<Box display={"flex"} justifyContent={"space-between"}>
				<Box fontWeight={600}>{name}</Box>
				<Box>{rating}</Box>
			</Box>
			<Box fontSize={12} textAlign={"left"}>{ description?.length > 100 ? description?.slice(0,50) : description }</Box>
		</div>
	);
}
