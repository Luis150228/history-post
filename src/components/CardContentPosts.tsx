import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from "@mui/material"
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';

export const CardContentPosts = ()=>{
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" src="https://github.com/octocat.png" />
                }
                title={'Nombre del proyecto'}
                subheader={'1h'}
                action={
                    <>
                        <IconButton aria-label="settings">
                            <ListIcon />
                        </IconButton>
                        <IconButton aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </>
                  }
                sx={{
                    display:'flex',
                    justifyContent: 'space-between',
                    alignItems:'center',
                    "& .MuiCardHeader-content":{
                        textAlign:'left'
                    }
                }}
            />
            <CardContent sx={{padding: '0px', margin: '0px 12px 0px 12px'}} className='card-content-posts'>
                <div className='follow-posts'>
                    <Typography sx={{maxWidth:'514px', textAlign:'left', overflow:'hidden', textOverflow:'elipsis'}}>
                    Commits, details for project, this a text to test, Commits, details for project, this a text to test, Commits, details for project, this a text to test, Commits, details for project, this a text to test, details for project, this a text to test, Commits, details for project, this a text to test
                    </Typography>
                </div>
            </CardContent>
            <CardMedia
                component={'img'}
                image="https://santandernet.sharepoint.com/sites/sandigitalworkplace/news6/MediaGallery/2025/3/TH-CIBER-FRAUDE1.jpeg"
                sx={{maxWidth:'508px', borderRadius:'12px', margin: '12px 12px 0px 12px'}}
            />
            <CardActions className="post-secction-commits">
                <div className="post-resume-commits">
                    <div className="post-resume">
                        <IconButton size="small">
                            <FavoriteIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton size="small">
                            <ThumbUpIcon fontSize="inherit"/>
                        </IconButton>
                    </div>
                    <div className="post-commits">
                        <Typography><span className="commits-data">5</span> Commits</Typography>
                        <Typography><span className="share-data">2</span> Shared</Typography>
                    </div>
                </div>
                <div className="post-commits-btns">
                    <IconButton size='large'>
                        <ThumbUpIcon  fontSize="inherit" />
                    </IconButton>
                    <IconButton size='large'>
                        <AddCommentIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton size='large'>
                        <SendIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton size='large'>
                        <ShareIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    )
}

//Me Gusta, Comentar, Enviar, Compartir