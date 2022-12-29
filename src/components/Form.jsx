import { useState } from "react";
import { toast } from "react-toastify";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TextInput from "./TextInput";

export default function Form() {
  const [urlCodeRequired, setUrlCodeRequired] = useState(false);
  const [customUrlCode, setCustomUrlCode] = useState("");
  const [longUrl, setLongUrl] = useState("");

  const clearForm = () => {
    setLongUrl("");
    setCustomUrlCode("");
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!longUrl) {
      return toast.error("Please enter your long url", { autoClose: 5000 });
    }

    const response = await toast.promise(
      fetch(`${import.meta.env.VITE_API}/api/url/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          longUrl,
          customUrlCode: urlCodeRequired ? customUrlCode : undefined,
        }),
      }),
      {
        pending: "Shortening Your Url...",
        success: "Request Success",
        error: "Error",
      }
    );
    const data = await response.json();
    // console.log(data);
    if (!response.ok) {
      toast.error(data, { autoClose: 5000 });
    } else {
      navigator.clipboard.writeText(data.shortUrl);
      clearForm();
      toast.info(
        `Your Short Url is ${data.shortUrl}. It's copied to your clipboard.`,
        { autoClose: 5000 }
      );
    }
  };

  return (
    <form
      className="flex flex-wrap justify-between items-center gap-4"
      onSubmit={handelSubmit}
    >
      <TextInput
        id="longUrlInput"
        placeholder="Enter your long url"
        value={longUrl}
        setValue={setLongUrl}
      />
      {urlCodeRequired && (
        <TextInput
          id="urlCodeInput"
          placeholder="Custom Url Code"
          value={customUrlCode}
          setValue={setCustomUrlCode}
        />
      )}
      <div className="flex justify-between items-center w-full">
        <span>
          <input
            className="accent-teal-900"
            type="checkbox"
            value={urlCodeRequired}
            onChange={(e) => setUrlCodeRequired(e.target.checked)}
            name="isUrlCodeRequired"
            id="urlCodeChecker"
          />
          <label className="text-sm ml-2" htmlFor="urlCodeChecker">
            Want Custom Url Code?
          </label>
        </span>
        <button
          type="submit"
          className="bg-black bg-opacity-30 p-1 rounded-full"
        >
          <ArrowRightAltIcon style={{ fontSize: "2rem" }} />
        </button>
      </div>
    </form>
  );
}
