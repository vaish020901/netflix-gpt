const cors = require("cors")({origin: true});
const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const {defineSecret} = require("firebase-functions/params");
const OpenAI = require("openai");

setGlobalOptions({maxInstances: 10});

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");

exports.gptMovieSearch = onRequest(
    {
      secrets: [OPENAI_API_KEY],
    },
    async (req, res) => {
      cors(req, res, async () => {
        try {
          const {query} = req.body;

          const openai = new OpenAI({
            apiKey: OPENAI_API_KEY.value(),
          });

          const gptResults = await openai.chat.completions.create({
            model: "gpt-5.5",
            messages: [
              {
                role: "user",
                content:
                "Act as a Movie Recommendation System and suggest " +
                "some movies for the query " +
                query +
                ". Only give me names of 5 movies, comma separated.",
              },
            ],
          });

          const movies = gptResults.choices[0]?.message?.content;

          res.json({movies});
        } catch (error) {
          console.error(error);

          res.status(500).json({
            error: "Failed to get movie recommendations",
          });
        }
      });
    },
);
