default_platform(:ios)

platform :ios do
  desc "Build and publish the app to Expo (iOS)"
  lane :publish_to_expo do
    # Build the app
    build_ios_app(
      scheme: "YourScheme",
      workspace: "YourWorkspace.xcworkspace"
    )

    # Publish to Expo
    expo_action(
      username: "expo_username",
      password: "expo_password"
    )

    # Notify testers via email
    email(
      to: "tester1@example.com,tester2@example.com",
      subject: "A new build is available for testing!",
      message: "Please download and test the latest build of the app."
    )
  end
end

platform :android do
  desc "Build and publish the app to Expo (Android)"
  lane :publish_to_expo do
    # Build the app
    gradle(
      task: "assembleRelease",
      build_type: "release"
    )

    # Publish to Expo
    expo_action(
      username: "expo_username",
      password: "expo_password"
    )

    # Notify testers via email
    email(
      to: "tester1@example.com,tester2@example.com",
      subject: "A new build is available for testing!",
      message: "Please download and test the latest build of the app."
    )
  end
end