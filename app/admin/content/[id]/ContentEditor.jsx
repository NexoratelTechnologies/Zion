"use client";

import { useState } from "react";
import { updateSiteContent } from "../../../actions/content";

export default function ContentEditor({ content }) {
  const [value, setValue] = useState(content.value);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function updateField(field, newValue) {
    setValue((current) => ({
      ...current,
      [field]: newValue,
    }));
  }

  function updateBox(index, field, newValue) {
    setValue((current) =>
      current.map((box, boxIndex) =>
        boxIndex === index
          ? {
              ...box,
              [field]: newValue,
            }
          : box,
      ),
    );
  }

  function addBox() {
    setValue((current) => [
      ...current,
      {
        link: "",
        text: "",
        image: "",
      },
    ]);
  }

  function removeBox(index) {
    setValue((current) => current.filter((_, boxIndex) => boxIndex !== index));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccess("");

    const result = await updateSiteContent(content.id, value);

    if (result?.error) {
      setError(result.error);
      return;
    }

    setSuccess("Content updated successfully.");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* FEATURED SERMON */}
      {content.key === "home_featured_sermon" && (
        <>
          <div>
            <label>Topic</label>
            <input
              type="text"
              value={value.topic ?? ""}
              onChange={(event) => updateField("topic", event.target.value)}
            />
          </div>

          <div>
            <label>Speaker</label>
            <input
              type="text"
              value={value.speaker ?? ""}
              onChange={(event) => updateField("speaker", event.target.value)}
            />
          </div>

          <div>
            <label>Thumbnail</label>
            <input
              type="text"
              value={value.thumbnail ?? ""}
              onChange={(event) => updateField("thumbnail", event.target.value)}
            />
          </div>

          <div>
            <label>YouTube Link</label>
            <input
              type="url"
              value={value.youtubeLink ?? ""}
              onChange={(event) =>
                updateField("youtubeLink", event.target.value)
              }
            />
          </div>
        </>
      )}

      {/* CONTACT PHONE */}
      {content.key === "contact_phone" && (
        <div>
          <label>Phone</label>
          <input
            type="text"
            value={value.phone ?? ""}
            onChange={(event) => updateField("phone", event.target.value)}
          />
        </div>
      )}

      {/* MINISTRIES BLOCK */}
      {content.key === "home_ministries_block" && (
        <>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={value.title ?? ""}
              onChange={(event) => updateField("title", event.target.value)}
            />
          </div>

          <div>
            <label>Subtext</label>
            <input
              type="text"
              value={value.subtext ?? ""}
              onChange={(event) => updateField("subtext", event.target.value)}
            />
          </div>

          <div>
            <label>Image</label>
            <input
              type="text"
              value={value.image ?? ""}
              onChange={(event) => updateField("image", event.target.value)}
            />
          </div>

          <div>
            <label>Adult Label</label>
            <input
              type="text"
              value={value.adultLabel ?? ""}
              onChange={(event) =>
                updateField("adultLabel", event.target.value)
              }
            />
          </div>

          <div>
            <label>Youth Label</label>
            <input
              type="text"
              value={value.youthLabel ?? ""}
              onChange={(event) =>
                updateField("youthLabel", event.target.value)
              }
            />
          </div>

          <div>
            <label>Children Label</label>
            <input
              type="text"
              value={value.childrenLabel ?? ""}
              onChange={(event) =>
                updateField("childrenLabel", event.target.value)
              }
            />
          </div>

          <div>
            <label>Button Text</label>
            <input
              type="text"
              value={value.buttonText ?? ""}
              onChange={(event) =>
                updateField("buttonText", event.target.value)
              }
            />
          </div>

          <div>
            <label>Button Link</label>
            <input
              type="text"
              value={value.buttonLink ?? ""}
              onChange={(event) =>
                updateField("buttonLink", event.target.value)
              }
            />
          </div>
        </>
      )}

      {/* PRAYER CAMP BLOCK */}
      {content.key === "home_prayer_camp_block" && (
        <>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={value.title ?? ""}
              onChange={(event) => updateField("title", event.target.value)}
            />
          </div>

          <div>
            <label>Subtext</label>
            <textarea
              value={value.subtext ?? ""}
              onChange={(event) => updateField("subtext", event.target.value)}
            />
          </div>

          <div>
            <label>Image</label>
            <input
              type="text"
              value={value.image ?? ""}
              onChange={(event) => updateField("image", event.target.value)}
            />
          </div>

          <div>
            <label>Button Text</label>
            <input
              type="text"
              value={value.buttonText ?? ""}
              onChange={(event) =>
                updateField("buttonText", event.target.value)
              }
            />
          </div>

          <div>
            <label>Button Link</label>
            <input
              type="text"
              value={value.buttonLink ?? ""}
              onChange={(event) =>
                updateField("buttonLink", event.target.value)
              }
            />
          </div>
        </>
      )}

      {/* FRIDAY/SUNDAY BOXES */}
      {content.key === "home_fundays_boxes" && (
        <>
          <h2>Home Page Cards</h2>

          {value.map((box, index) => (
            <div key={index}>
              <h3>Card {index + 1}</h3>

              <div>
                <label>Text</label>
                <textarea
                  value={box.text ?? ""}
                  onChange={(event) =>
                    updateBox(index, "text", event.target.value)
                  }
                />
              </div>

              <div>
                <label>Image</label>
                <input
                  type="text"
                  value={box.image ?? ""}
                  onChange={(event) =>
                    updateBox(index, "image", event.target.value)
                  }
                />
              </div>

              <div>
                <label>Link</label>
                <input
                  type="text"
                  value={box.link ?? ""}
                  onChange={(event) =>
                    updateBox(index, "link", event.target.value)
                  }
                />
              </div>

              <button type="button" onClick={() => removeBox(index)}>
                Remove Card
              </button>
            </div>
          ))}

          <button type="button" onClick={addBox}>
            Add Card
          </button>
        </>
      )}
      {/* RECENT SERMON */}
      {content.key === "about_recent_sermon" && (
        <>
          <div>
            <label>Date</label>
            <input
              type="text"
              value={value.date ?? ""}
              onChange={(event) => updateField("date", event.target.value)}
            />
          </div>

          <div>
            <label>Title</label>
            <input
              type="text"
              value={value.title ?? ""}
              onChange={(event) => updateField("title", event.target.value)}
            />
          </div>

          <div>
            <label>YouTube Link</label>
            <input
              type="url"
              value={value.youtubeLink ?? ""}
              onChange={(event) =>
                updateField("youtubeLink", event.target.value)
              }
            />
          </div>
        </>
      )}
      {error && <p>{error}</p>}

      {success && <p>{success}</p>}

      <button type="submit">Save Changes</button>
    </form>
  );
}
