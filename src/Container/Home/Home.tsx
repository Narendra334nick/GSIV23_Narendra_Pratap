import React from "react";
import config from "../../Config/Config";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../Redux/movieReducer";
import Card from "../../Components/Card/Card";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";


export default function Home(props: any) {

  const navigate = useNavigate();
	const navigation = (link: string) => {
		navigate(link);
	};

	const data = useSelector((state: any) => state.movie.data);
	const dispatch = useDispatch();

	const [search, setSearch] = React.useState<string>("");
	const onChnage = (e: any) => {
		setSearch(e.target.value);
	};

	const getData = async () => {
		try {
			const data = await axios({
				method: "get",
				url: config.url,
			});
			dispatch(setData(data.data.results));
		} catch (error) {
			console.log("error in getData", error);
		}
	};

	React.useEffect(() => {
		getData();
	}, []);

	const getDataByMovieName = async (search: string) => {
		try {
			const data = await axios({
				method: "get",
				url: `${config.urlMovieSearch}&query=${search}`,
			});
			dispatch(setData(data.data.results));
		} catch (error) {
      console.log('error in getDataByMovieName',error);
    }
	};

	React.useEffect(() => {
		if (search && search.length > 2) {
			getDataByMovieName(search);
		}else if(search === "" || search === undefined || search === null){
      getData();
    }
	}, [search]);

	return (
		<Box p={1}>
			<Box position={"fixed"} top={"1%"} left={"2%"} zIndex={500}>
				<SearchInput value={search} placeHolder="Serach" onChnage={onChnage} />
			</Box>
			<Grid container spacing={2}>
				{data &&
					data.map((item: any, index: number) => {
						return (
							<Grid item xs={12} sm={6} md={3} lg={3} onClick={()=>navigation(`details/${123}`)}>
								<Card
									key={index}
									name={item.original_title}
									poster={`${config.imageBaseUrl}${item.poster_path}`}
                  rating={item.vote_average}
                  description={item.overview}
								/>
							</Grid>
						);
					})}
			</Grid>
		</Box>
	);
}
