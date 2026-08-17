"use client";

import { useState } from "react";
import { updateSiteContent } from "../../../actions/content";
import styles from "./ContentEditor.module.css";

export default function ContentEditor({ content }) {
  const [value, setValue] = useState(content.value);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [saving, setSaving] = useState(false);

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
    setSaving(true);

    try {
      const result = await updateSiteContent(content.id, value);

      if (result?.error) {
        setError(result.error);
        return;
      }

      setSuccess("Content updated successfully.");
    } catch {
      setError("Something went wrong while saving your changes.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* FEATURED SERMON */}
      {content.key === "home_featured_sermon" && (
        <div className={styles.fields}>
          <Field
            label="Topic"
            value={value.topic}
            onChange={(newValue) => updateField("topic", newValue)}
          />

          <Field
            label="Speaker"
            value={value.speaker}
            onChange={(newValue) => updateField("speaker", newValue)}
          />

          <Field
            label="Thumbnail"
            value={value.thumbnail}
            onChange={(newValue) => updateField("thumbnail", newValue)}
          />

          <Field
            label="YouTube Link"
            type="url"
            value={value.youtubeLink}
            onChange={(newValue) => updateField("youtubeLink", newValue)}
          />
        </div>
      )}

      {/* CONTACT PHONE */}
      {content.key === "contact_phone" && (
        <div className={styles.fields}>
          <Field
            label="Phone"
            value={value.phone}
            onChange={(newValue) => updateField("phone", newValue)}
          />
        </div>
      )}

      {/* MINISTRIES */}
      {content.key === "home_ministries_block" && (
        <div className={styles.fields}>
          <Field
            label="Title"
            value={value.title}
            onChange={(newValue) => updateField("title", newValue)}
          />

          <Field
            label="Subtext"
            value={value.subtext}
            onChange={(newValue) => updateField("subtext", newValue)}
          />

          <Field
            label="Image"
            value={value.image}
            onChange={(newValue) => updateField("image", newValue)}
          />

          <Field
            label="Adult Label"
            value={value.adultLabel}
            onChange={(newValue) => updateField("adultLabel", newValue)}
          />

          <Field
            label="Youth Label"
            value={value.youthLabel}
            onChange={(newValue) => updateField("youthLabel", newValue)}
          />

          <Field
            label="Children Label"
            value={value.childrenLabel}
            onChange={(newValue) => updateField("childrenLabel", newValue)}
          />

          <Field
            label="Button Text"
            value={value.buttonText}
            onChange={(newValue) => updateField("buttonText", newValue)}
          />

          <Field
            label="Button Link"
            value={value.buttonLink}
            onChange={(newValue) => updateField("buttonLink", newValue)}
          />
        </div>
      )}

      {/* PRAYER CAMP */}
      {content.key === "home_prayer_camp_block" && (
        <div className={styles.fields}>
          <Field
            label="Title"
            value={value.title}
            onChange={(newValue) => updateField("title", newValue)}
          />

          <Field
            label="Subtext"
            textarea
            value={value.subtext}
            onChange={(newValue) => updateField("subtext", newValue)}
          />

          <Field
            label="Image"
            value={value.image}
            onChange={(newValue) => updateField("image", newValue)}
          />

          <Field
            label="Button Text"
            value={value.buttonText}
            onChange={(newValue) => updateField("buttonText", newValue)}
          />

          <Field
            label="Button Link"
            value={value.buttonLink}
            onChange={(newValue) => updateField("buttonLink", newValue)}
          />
        </div>
      )}

      {/* FRIDAY / SUNDAY BOXES */}
      {content.key === "home_fundays_boxes" && (
        <div className={styles.boxSection}>
          <div className={styles.boxSectionHeader}>
            <div>
              <span>HOMEPAGE CARDS</span>
              <h3>Content Cards</h3>
            </div>

            <button type="button" className={styles.addButton} onClick={addBox}>
              <i className="fa-solid fa-plus"></i>
              Add Card
            </button>
          </div>

          <div className={styles.cards}>
            {value.map((box, index) => (
              <div className={styles.contentBox} key={index}>
                <div className={styles.contentBoxHeader}>
                  <div>
                    <span>CARD {String(index + 1).padStart(2, "0")}</span>
                    <h4>Homepage Card</h4>
                  </div>

                  <button
                    type="button"
                    className={styles.removeButton}
                    onClick={() => removeBox(index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                    Remove
                  </button>
                </div>

                <div className={styles.fields}>
                  <Field
                    label="Text"
                    textarea
                    value={box.text}
                    onChange={(newValue) => updateBox(index, "text", newValue)}
                  />

                  <Field
                    label="Image"
                    value={box.image}
                    onChange={(newValue) => updateBox(index, "image", newValue)}
                  />

                  <Field
                    label="Link"
                    value={box.link}
                    onChange={(newValue) => updateBox(index, "link", newValue)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RECENT SERMON */}
      {content.key === "about_recent_sermon" && (
        <div className={styles.fields}>
          <Field
            label="Date"
            value={value.date}
            onChange={(newValue) => updateField("date", newValue)}
          />

          <Field
            label="Title"
            value={value.title}
            onChange={(newValue) => updateField("title", newValue)}
          />

          <Field
            label="YouTube Link"
            type="url"
            value={value.youtubeLink}
            onChange={(newValue) => updateField("youtubeLink", newValue)}
          />
        </div>
      )}

      {/* STATUS */}
      {error && (
        <div className={`${styles.message} ${styles.error}`}>
          <i className="fa-solid fa-circle-exclamation"></i>
          {error}
        </div>
      )}

      {success && (
        <div className={`${styles.message} ${styles.success}`}>
          <i className="fa-solid fa-circle-check"></i>
          {success}
        </div>
      )}

      {/* SAVE */}
      <div className={styles.formFooter}>
        <span>
          <i className="fa-solid fa-lock"></i>
          Administrator access
        </span>

        <button type="submit" className={styles.saveButton} disabled={saving}>
          {saving ? (
            <>
              <i className="fa-solid fa-spinner fa-spin"></i>
              Saving...
            </>
          ) : (
            <>
              Save Changes
              <i className="fa-solid fa-arrow-right"></i>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({ label, value, onChange, type = "text", textarea = false }) {
  return (
    <div className={styles.field}>
      <label>{label}</label>

      {textarea ? (
        <textarea
          value={value ?? ""}
          onChange={(event) => onChange(event.target.value)}
          rows={4}
        />
      ) : (
        <input
          type={type}
          value={value ?? ""}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </div>
  );
}
