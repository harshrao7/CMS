import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from "@material-tailwind/react";
import Payment from './Payment';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='flex flex-wrap p-5 gap-5'>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title="Data Structure and Algorithms"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://media.geeksforgeeks.org/img-practice/banner/dsa-self-paced-preview-thumbnail-old.png?v=1616869800"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    "Master data structures and algorithms for coding success."
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Link to={'/payment'}>
                <Button variant="gradient" className='ml-32' >buy now</Button>
                </Link>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title="Web Development"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://img.graphicsurf.com/2020/06/Web-development-courses-flat-design.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    "Learn web development for creating modern, interactive websites."
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Button variant="gradient" className='ml-32'>buy now</Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title="Python"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://www.traininginbangalore.com/images/infographics/python-training-in-bangalore-tib.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    "Master Python programming for versatile software development."
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Button variant="gradient" className='ml-32'>buy now</Button>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title="Java"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://www.enhancelearn.com/assets/images/courses/398071549882705.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    "A Java course imparts comprehensive knowledge in this versatile language, preparing students for software development, from web applications to Android apps."
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Button variant="gradient" className='ml-32'>buy now</Button>
            </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title="Machine Learning"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://www.mrdbourke.com/content/images/2020/03/Data-Science-Machine-Learning-Zero-to-Mastery-outline.jpeg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    "Master machine learning for intelligent data analysis and predictions."
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Button variant="gradient" className='ml-32'>buy now</Button>
            </CardActions>
        </Card>
        </div>
    );
}
