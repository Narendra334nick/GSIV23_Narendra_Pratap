import React from "react";
import { useParams } from "react-router-dom";
import config from "../../Config/Config";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMovieDetails } from "../../Redux/movieDetails";
import { Box } from "@mui/material";
import classes from "./Details.module.scss";

export default function Details() {
	const { id } = useParams();
	const data = useSelector((state: any) => state.movieDetails.data);
	const dispatch = useDispatch();

	const getDataByMovieId = async (id: string | undefined) => {
		try {
			const data = await axios({
				method: "get",
				url: `https://api.themoviedb.org/3/movie/${id}?api_key=${config.apiKey}`,
			});
			dispatch(setMovieDetails(data.data));
		} catch (error) {
			console.log("error in getDataByMovieName", error);
		}
	};

	React.useEffect(() => {
		if (id) {
			getDataByMovieId(id);
		}
	}, [id]);

	return (
		<div className={classes["root"]}>
			<Box display={"flex"} justifyContent={"flex-start"}>
				<Box>
					<img
						src={`${config.imageBaseUrl}${data.poster_path}`}
						alt="poster img"
						className={classes["posterImage"]}
					/>
				</Box>
				<Box pl={1}>
					<Box fontWeight={600} fontSize={20}>
						{data?.title}
					</Box>
					<Box fontSize={12}>{data?.tagline}</Box>
					<Box>
						<pre>
							{data?.vote_average} | {data?.release_date} | {data?.status} | {data?.runtime} mins
						</pre>
					</Box>
					<Box fontSize={14}>
            Genere :  &nbsp;
						{data?.genres?.map((item: any) => item.name)?.join(' | ')}
					</Box>

          <Box fontSize={14} mt={1}>
            Language :  &nbsp;
						{data?.spoken_languages?.map((item: any) => item.english_name)?.join(' | ')}
					</Box>

					<Box mt={1}>Overview &nbsp;: &nbsp;{data?.overview}</Box>
				</Box>
			</Box>
		</div>
	);
}
