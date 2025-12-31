This project demonstrates deployment of a simple front-end using a docker container and an EC2 instance. 
Components used : 
  - Docker Image
  - Docker Container (running version of Docker image)
  - EC2 instance (Ubuntu 24.04 LTS)
  - S3 bucket
  - IAM role 
Purpose of Components :
  Docker Image - Contains the application code of the front-end
  Docker Container - Runs the front-end
  EC2 instance - Used to run the Docker container
  S3 bucket - Stores all the files related to the project as a backup
  IAM role - Enables EC2 instance to sync with S3 bucket
Steps to implement the project
  - Launch an EC2 instance
  - Create a S3 bucket
  - Create an IAM role which allows for full access to S3 service
  - Attach the IAM role to the EC2 instance you've lauched
  - Locally, create a docker file of the application code
  - Push the Docker file and the other code files to the S3 bucket through a common folder
  - Sync the EC2 instance and S3 bucket, you'll be able to see the files in your instance, the ones you uploaded in the bucket
  - Install and enable Docker on the instance
  - Build a Docker image of the respective Docker file
  - Run the image as as Docker container   
