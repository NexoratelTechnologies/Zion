"use client";

import { useState } from "react";
import { updateSiteContent } from "../../../actions/content";
import styles from "./ContentEditor.module.css";

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
    <form onSubmit={handleSubmit} className={styles.editorForm}>
      {/* FEATURED SERMON */}
      {content.key === "home_featured_sermon" && (
        <>
          <div className={styles.field}>
            <label>Topic</label>
            <input
              type="text"
              value={value.topic ?? ""}
              onChange={(event) => updateField("topic", event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Speaker</label>
            <input
              type="text"
              value={value.speaker ?? ""}
              onChange={(event) => updateField("speaker", event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Thumbnail</label>
            <input
              type="text"
              value={value.thumbnail ?? ""}
              onChange={(event) =>
                updateField("thumbnail", event.target.value)
              }
            />
          </div>

          <div className={styles.field}>
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
        <div className={styles.field}>
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
          <div className={styles.field}>
            <label>Title</label>
            <input
              type="text"
              value={value.title ?? ""}
              onChange={(event) => updateField("title", event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Subtext</label>
            <input
              type="text"
              value={value.subtext ?? ""}
              onChange={(event) => updateField("subtext", event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Image</label>
            <input
              type="text"
              value={value.image ?? ""}
              onChange={(event) => updateField("image", event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Adult Label</label>
            <input
              type="text"
              value={value.adultLabel ?? ""}
              onChange={(event) =>
                updateField("adultLabel", event.target.value)
              }
            />
          </div>

          <div className={styles.field}>
            <label>Youth Label</label>
            <input
              type="text"
              value={value.youthLabel ?? ""}
              onChange={(event) =>
                updateField("youthLabel", event.target.value)
              }
            />
          </div>

          <div className={styles.field}>
            <label>Children Label</label>
            <input
              type="text"
              value={value.childrenLabel ?? ""}
              onChange={(event) =>
                updateField("childrenLabel", event.target.value)
              }
            />
          </div>

          <div className={styles.field}>
            <label>Button Text</label>
            <input
              type="text"
              value={value.buttonText ?? ""}
              onChange={(event) =>
                updateField("buttonText", event.target.value)
              }
            />
          </div>

          <div className={styles.field}>
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
          <div className={styles.field}>
            <label>Title</label>
            <input
              type="text"
              value={value.title ?? ""}
              onChange={(event) => updateField("title", event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Subtext</label>
            <textarea
              value={value.subtext ?? ""}
              onChange={(event) => updateField("subtext", event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Image</label>
            <input
              type="text"
              value={value.image ?? ""}
              onChange={(event) => updateField("image", event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Button Text</label>
            <input
              type="text"
              value={value.buttonText ?? ""}
              onChange={(event) =>
                updateField("buttonText", event.target.value)
              }
            />
          </div>

          <div className={styles.field}>
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
          <h2 className={styles.cardsHeading}>Home Page Cards</h2>

          {value.map((box, index) => (
            <div key={index} className={styles.repeatCard}>
              <h3>Card {index + 1}</h3>

              <div className={styles.field}>
                <label>Text</label>
                <textarea
                  value={box.text ?? ""}
                  onChange={(event) =>
                    updateBox(index, "text", event.target.value)
                  }
                />
              </div>

              <div className={styles.field}>
                <label>Image</label>
                <input
                  type="text"
                  value={box.image ?? ""}
                  onChange={(event) =>
                    updateBox(index, "image", event.target.value)
                  }
                />
              </div>

              <div className={styles.field}>
                <label>Link</label>
                <input
                  type="text"
                  value={box.link ?? ""}
                  onChange={(event) =>
                    updateBox(index, "link", event.target.value)
                  }
                />
              </div>

              <button
                type="button"
                onClick={() => removeBox(index)}
                className={styles.removeBtn}
              >
                Remove Card
              </button>
            </div>
          ))}

          <button type="button" onClick={addBox} className={styles.addBtn}>
            <i className="fa-solid fa-plus"></i>
            Add Card
          </button>
        </>
      )}

      {/* RECENT SERMON */}
      {content.key === "about_recent_sermon" && (
        <>
          <div className={styles.field}>
            <label>Date</label>
            <input
              type="text"
              value={value.date ?? ""}
              onChange={(event) => updateField("date", event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Title</label>
            <input
              type="text"
              value={value.title ?? ""}
              onChange={(event) => updateField("title", event.target.value)}
            />
          </div>

          <div className={styles.field}>
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

      {error && <p className={styles.errorMsg}>{error}</p>}

      {success && <p className={styles.successMsg}>{success}</p>}

      <button type="submit" className={styles.submitBtn}>
        Save Changes
      </button>
    </form>
  );
}
