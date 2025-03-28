import React, { useState } from 'react';
import LandingNavbar from '../../components/navbar/landingNavbar';

const DonationForm = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // You could show a modal or confirm before final submission:
        setShowModal(true);
    };

    const confirmSubmission = () => {
        // Optionally finalize form submission here:
        document.getElementById('donationForm').submit();
    };

    return (
        <>
            {/* 1. Header from about.jsx */}
            <div className="w-auto pb-2 bg-white overflow-hidden">
                <LandingNavbar />
            </div>

            {/* 2. Donation Banner */}
            <div className="bg-[#d6c6ac] border-b border-black py-4 px-6 md:px-12">
                <h1
                    className="text-3xl md:text-4xl font-bold"
                    style={{ fontFamily: "'Hina Mincho', serif" }}
                >
                    Donation Form
                </h1>
            </div>

            {/* 3. Outer Container & Intro Box */}
            <div className="flex justify-center bg-[#f2f2e6] py-10 px-4">
                <div className="w-full max-w-5xl bg-[#dfdcc2] border border-black rounded-md p-6 md:p-8 shadow-lg">
                    <p className="mb-6 text-lg leading-relaxed text-justify">
                        In addition to preserving your historic objects it is important to
                        remember to preserve the history or story that goes with them. For
                        example, the uniform worn by your great grandfather is just a
                        uniform if the story is lost. Take the time to write down the story
                        that goes with your objects; include any background details that
                        would help our team understand the significance of the item.
                    </p>

                    {/* "Tell us about yourself." + "Where do you live?" Frame */}
                    <div className="p-6 rounded-md bg-[#f2f2e6] border border-black">
                        <h2
                            className="text-xl md:text-2xl font-semibold mb-2"
                            style={{ fontFamily: "'Noto Sans', sans-serif" }}
                        >
                            Tell us about yourself.
                        </h2>

                        <form
                            id="donationForm"
                            method="POST"
                            action="https://museobulawan.online/development/Museo%20Bulawan%20Visitor/Donation_Form/process_donation.php"
                            encType="multipart/form-data"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="formType" value="Donation" />

                            {/* Name fields */}
                            <label className="block font-semibold mt-4 mb-1">
                                Name <span className="text-red-600">*</span>
                            </label>
                            <div className="flex flex-col gap-4 md:flex-row">
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    placeholder="First Name"
                                    className="flex-1 border border-gray-400 rounded-full px-4 py-2"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    placeholder="Last Name"
                                    className="flex-1 border border-gray-400 rounded-full px-4 py-2"
                                />
                            </div>

                            {/* Age & Sex */}
                            <div className="mt-4 flex flex-col gap-4 md:flex-row">
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="font-semibold mb-1">
                                        Age <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="age"
                                        min="0"
                                        required
                                        placeholder="Age"
                                        className="border border-gray-400 rounded-full px-4 py-2"
                                    />
                                </div>
                                <div className="flex flex-col w-full md:w-1/2">
                                    <label className="font-semibold mb-1">Sex</label>
                                    <div className="flex items-center gap-4 mt-1">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="male"
                                                className="border-gray-400"
                                            />
                                            <span className="ml-1">Male</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="female"
                                                className="border-gray-400"
                                            />
                                            <span className="ml-1">Female</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="others"
                                                className="border-gray-400"
                                            />
                                            <span className="ml-1">Others</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="mt-4 flex flex-col gap-4 md:flex-row">
                                <div className="md:w-1/2">
                                    <label className="font-semibold mb-1 block">
                                        Email <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="example@gmail.com"
                                        className="border border-gray-400 rounded-full px-4 py-2 w-full"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <label className="font-semibold mb-1 block">
                                        Phone Number <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="+6309123456789"
                                        className="border border-gray-400 rounded-full px-4 py-2 w-full"
                                    />
                                </div>
                            </div>

                            {/* Organization */}
                            <div className="mt-4">
                                <label className="font-semibold mb-1 block">Organization</label>
                                <input
                                    type="text"
                                    name="organization"
                                    placeholder="School/Institution/etc"
                                    className="border border-gray-400 rounded-full px-4 py-2 w-full"
                                />
                            </div>

                            {/* Where do you live? */}
                            <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
                                Where do you live?
                            </h3>
                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="md:w-1/2">
                                    <label className="font-semibold mb-1 block">
                                        Province <span className="text-red-600">*</span>
                                    </label>
                                    <select
                                        name="province"
                                        required
                                        className="border border-gray-400 rounded-full px-4 py-2 w-full"
                                    >
                                        <option value="">Select Province</option>
                                        <option>Camarines Norte</option>
                                        <option>Province 1</option>
                                        <option>Province 2</option>
                                        <option>Province 3</option>
                                    </select>
                                </div>
                                <div className="md:w-1/2">
                                    <label className="font-semibold mb-1 block">
                                        City <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        placeholder="City"
                                        className="border border-gray-400 rounded-full px-4 py-2 w-full"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col gap-4 md:flex-row">
                                <div className="md:w-1/2">
                                    <label className="font-semibold mb-1 block">
                                        Barangay <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="barangay"
                                        required
                                        placeholder="Barangay"
                                        className="border border-gray-400 rounded-full px-4 py-2 w-full"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <label className="font-semibold mb-1 block">Street</label>
                                    <input
                                        type="text"
                                        name="street"
                                        placeholder="Street"
                                        className="border border-gray-400 rounded-full px-4 py-2 w-full"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* 4. Second "Frame" for About the artifact */}
                    <div className="p-6 mt-8 rounded-md bg-[#f2f2e6] border border-black">
                        <h2
                            className="text-xl md:text-2xl font-semibold mb-2"
                            style={{ fontFamily: "'Noto Sans', sans-serif" }}
                        >
                            About the artifact.
                        </h2>

                        {/* We continue the SAME form from above by referencing it via ID or you could place it all in one big form. */}
                        <form
                            id="donationForm" // same ID as above, or you can place everything in a single <form> if you prefer
                            method="POST"
                            action="https://museobulawan.online/development/Museo%20Bulawan%20Visitor/Donation_Form/process_donation.php"
                            encType="multipart/form-data"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label className="block font-semibold mt-4 mb-1">
                                    Title/Name of the Artifact. <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="artifactTitle"
                                    required
                                    placeholder="Title/Name of the Artifact"
                                    className="bg-white border border-gray-400 rounded-full w-full px-4 py-2"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mt-4 mb-1">
                                    Artifact Description <span className="text-red-600">*</span>
                                </label>
                                <textarea
                                    name="artifactDescription"
                                    required
                                    placeholder="Artifact Description"
                                    className="bg-white border border-gray-400 rounded-xl w-full p-4 h-24"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mt-4 mb-1">
                                    How and where did you acquire the artifact?{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="acquisition"
                                    required
                                    placeholder="Acquisition Details"
                                    className="bg-white border border-gray-400 rounded-full w-full px-4 py-2"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mt-4 mb-1">
                                    Is there any other information about the artifact that the museum
                                    should know?
                                </label>
                                <textarea
                                    name="additionalInfo"
                                    placeholder="Additional Information"
                                    className="bg-white border border-gray-400 rounded-xl w-full p-4 h-20"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mt-4 mb-1">
                                    Would you like to provide a brief narrative or story related to
                                    the artifact?
                                </label>
                                <textarea
                                    name="narrative"
                                    placeholder="Brief narrative or story"
                                    className="bg-white border border-gray-400 rounded-xl w-full p-4 h-20"
                                />
                            </div>

                            {/* Images of the artifact */}
                            <div className="mt-6">
                                <label className="block font-semibold text-lg mb-1">
                                    Images of the artifact
                                </label>
                                <input
                                    type="text"
                                    name="artifactLink"
                                    placeholder="Paste Link"
                                    className="bg-white border border-gray-400 rounded-full w-full px-4 py-2 my-3"
                                />
                                <div className="flex flex-col md:flex-row gap-4 items-center">
                                    <div className="w-48 h-48 border-2 border-black rounded-md bg-white flex items-center justify-center">
                                        <label className="text-blue-600 cursor-pointer text-center">
                                            <input
                                                type="file"
                                                name="artifact_img[]"
                                                multiple
                                                className="hidden"
                                            />
                                            Drag or <span className="underline">Choose Files</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Documentation */}
                            <div className="mt-6">
                                <label className="block font-semibold text-lg mb-1">
                                    Is there any relevant documentation or research about the artifact?
                                </label>
                                <p className="text-sm text-gray-700 mb-2">
                                    Such as Provenance Documents, Historical Records, Research
                                    Papers, Certificates of Authenticity, Catalogs or Inventories.
                                </p>
                                <input
                                    type="text"
                                    name="documentationLink"
                                    placeholder="Paste Link"
                                    className="bg-white border border-gray-400 rounded-full w-full px-4 py-2 my-3"
                                />
                                <div className="flex flex-col md:flex-row gap-4 items-center">
                                    <div className="w-48 h-48 border-2 border-black rounded-md bg-white flex items-center justify-center">
                                        <label className="text-blue-600 cursor-pointer text-center">
                                            <input
                                                type="file"
                                                name="documentation[]"
                                                multiple
                                                className="hidden"
                                            />
                                            Drag or <span className="underline">Choose Files</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Related Images */}
                            <div className="mt-6">
                                <label className="block font-semibold text-lg mb-1">
                                    Any related images about the artifact.
                                </label>
                                <p className="text-sm text-gray-700 mb-2">
                                    For example an image of your grandfather wearing the clothes, or
                                    image of an artifact while being used.
                                </p>
                                <input
                                    type="text"
                                    name="relatedImagesLink"
                                    placeholder="Paste Link"
                                    className="bg-white border border-gray-400 rounded-full w-full px-4 py-2 my-3"
                                />
                                <div className="flex flex-col md:flex-row gap-4 items-center">
                                    <div className="w-48 h-48 border-2 border-black rounded-md bg-white flex items-center justify-center">
                                        <label className="text-blue-600 cursor-pointer text-center">
                                            <input
                                                type="file"
                                                name="related_img[]"
                                                multiple
                                                className="hidden"
                                            />
                                            Drag or <span className="underline">Choose Files</span>
                                        </label>
                                    </div>
                                    <p className="font-semibold text-lg">or</p>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-[#726953] hover:bg-[#5e5745] text-white px-8 py-3 rounded-full text-lg shadow-md"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Example Confirmation Modal (if you want to confirm) */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
                        <p className="mb-4 text-lg font-semibold">
                            Do you want to submit this form?
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={confirmSubmission}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DonationForm;