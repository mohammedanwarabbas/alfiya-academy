import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LessonPage() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({
    0: null,
    1: null,
    2: null,
    3: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [popup, setPopup] = useState<string | null>(null);

  const questions = [
    {
      question: 'What is better than charity followed by harm?',
      options: [
        'Kind speech and forgiveness',
        'Silence',
        'Public praise',
        'Strictness',
      ],
      correct: 0,
    },
    {
      question: 'Why are gentle words powerful?',
      options: [
        'They show dominance',
        'They heal hearts',
        'They create fear',
        'They control people',
      ],
      correct: 1,
    },
    {
      question: 'Kind speech reflects which character trait?',
      options: [
        'Arrogance',
        'Weakness',
        'Good manners',
        'Competition',
      ],
      correct: 2,
    },
    {
      question: 'The Quran encourages believers to speak:',
      options: [
        'Harshly',
        'Loudly',
        'Proudly',
        'Gently and wisely',
      ],
      correct: 3,
    },
  ];

  const allAnswered = Object.values(answers).every((a) => a !== null);

  const handleSelect = (qIndex: number, value: number) => {
    if (submitted) return;
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleSubmit = () => {
    setSubmitted(true);

    const allCorrect = questions.every(
      (q, index) => answers[index] === q.correct
    );

    if (allCorrect) {
      setPopup('🎉 Congratulations! You cleared the quiz.');
    } else {
      setPopup('❌ Some answers are incorrect. Please retry.');
    }
  };

  const handleRetry = () => {
    setAnswers({ 0: null, 1: null, 2: null, 3: null });
    setSubmitted(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* TOP NAVIGATION */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <Button variant="outlined" disabled>
          ← Previous Lesson
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            setPopup('Please complete the quiz to unlock next lesson.')
          }
        >
          Next Lesson →
        </Button>
      </Box>

      {/* TITLE */}
      <Typography variant="h3" gutterBottom>
        100 Ayaths of Akhlaq and Adab
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        The Quranic code of character and social conduct.
      </Typography>

      {/* VIDEO */}
      <Box
        sx={{
          position: 'relative',
          paddingTop: '50%',
          mb: 3,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          component="iframe"
          src="https://www.youtube.com/embed/Pee13mBWKpM?autoplay=1&mute=0"
          allow="autoplay"
          allowFullScreen
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
        />
      </Box>

      {/* COMPLETE LESSON BUTTON */}
      {!quizOpen && (
        <Button
          variant="contained"
          onClick={() => setQuizOpen(true)}
          sx={{ mb: 4 }}
        >
          Complete the Lesson
        </Button>
      )}

      {quizOpen && (
        <>
          <Divider sx={{ mb: 4 }} />

          <Typography variant="h5" sx={{ mb: 3 }}>
            Quiz
          </Typography>

          <Stack spacing={4}>
            {questions.map((q, index) => {
              const isCorrect = answers[index] === q.correct;

              return (
                <Paper key={index} sx={{ p: 3 }}>
                  <Typography variant="subtitle1" sx={{ mb: 2 }}>
                    {index + 1}. {q.question}
                  </Typography>

                  <RadioGroup
                    value={answers[index] ?? ''}
                    onChange={(e) =>
                      handleSelect(index, Number(e.target.value))
                    }
                  >
                    {q.options.map((option, i) => (
                      <FormControlLabel
                        key={i}
                        value={i}
                        control={<Radio />}
                        label={option}
                        sx={{
                          ...(submitted &&
                            answers[index] !== null &&
                            i === answers[index] && {
                              color: isCorrect
                                ? 'success.main'
                                : 'error.main',
                            }),
                        }}
                      />
                    ))}
                  </RadioGroup>
                </Paper>
              );
            })}
          </Stack>

          {/* QUIZ BUTTONS */}
          <Box sx={{ mt: 5, display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!allAnswered || submitted}
            >
              Submit
            </Button>

            <Button
              variant="outlined"
              onClick={handleRetry}
              disabled={!submitted}
            >
              Retry
            </Button>

            <Button
              variant="text"
              onClick={() => navigate('/mock/course')}
            >
              Go to All Chapters
            </Button>
          </Box>
        </>
      )}

      {/* POPUP */}
      <Dialog open={!!popup} onClose={() => setPopup(null)}>
        <DialogTitle>Notification</DialogTitle>
        <DialogContent>
          <Typography>{popup}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPopup(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}