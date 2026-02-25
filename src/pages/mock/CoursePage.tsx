import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Chip,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import MenuIcon from '@mui/icons-material/Menu';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useNavigate } from 'react-router-dom';
import { mockCourse } from './mockCourseData';

export default function CoursePage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const chapters = mockCourse.course.chapters;

  const [selectedChapter, setSelectedChapter] = useState(chapters[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isUnlocked = (chapterIndex: number, lessonIndex: number) =>
    chapterIndex === 0 && lessonIndex === 0;

  const Sidebar = (
    <Box
      sx={{
        width: 320,
        p: 3,
        bgcolor: 'background.paper',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <Typography variant="h6" mb={3}>
        Chapters
      </Typography>

      <Stack spacing={2}>
        {chapters.map((chapter) => (
          <Card
            key={chapter.id}
            onClick={() => {
              setSelectedChapter(chapter);
              setDrawerOpen(false);
            }}
            sx={{
              cursor: 'pointer',
              border:
                selectedChapter.id === chapter.id
                  ? `2px solid ${theme.palette.primary.main}`
                  : '1px solid transparent',
            }}
          >
            <CardMedia
              component="img"
              height="100"
              image={chapter.thumbnail}
            />
            <CardContent>
              <Typography fontWeight={600}>
                {chapter.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {chapter.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {!isMobile && (
        <Box
          sx={{
            width: 320,
            borderRight: `1px solid ${theme.palette.divider}`,
          }}
        >
          {Sidebar}
        </Box>
      )}

      {isMobile && (
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          {Sidebar}
        </Drawer>
      )}

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 4,
          bgcolor: 'background.default',
        }}
      >
        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ mb: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h4" mb={1}>
          {selectedChapter.title}
        </Typography>

        <Typography color="text.secondary" mb={4}>
          {selectedChapter.description}
        </Typography>

        <Stack spacing={3}>
          {selectedChapter.lessons.map((lesson, lessonIndex) => {
            const chapterIndex = chapters.indexOf(selectedChapter);
            const unlocked = isUnlocked(chapterIndex, lessonIndex);

            return (
              <Card
                key={lesson.id}
                onClick={() =>
                  unlocked &&
                  navigate(`/mock/lesson/${lesson.id}`)
                }
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  cursor: unlocked ? 'pointer' : 'not-allowed',
                  opacity: unlocked ? 1 : 0.5,
                }}
              >
                <CardMedia
                  component="img"
                  image={lesson.thumbnail}
                  sx={{ width: 120, height: 80, borderRadius: 2 }}
                />

                <Box sx={{ ml: 3, flex: 1 }}>
                  <Typography fontWeight={600}>
                    {lesson.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {lesson.description}
                  </Typography>

                  <Chip
                    icon={<PlayCircleOutlineIcon />}
                    label={`${lesson.duration} min`}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Box>

                {!unlocked && <LockIcon />}
              </Card>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}