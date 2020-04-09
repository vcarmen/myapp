pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'echo "Hi Class"'
      }
    }

    stage('UnitTest') {
      steps {
        sh 'echo "Unit Tests"'
      }
    }

    stage('DeployToDev') {
      parallel {
        stage('DeployToDev') {
          steps {
            sh 'echo "Deploy to Dev Environment"'
          }
        }

        stage('DeployToQA') {
          steps {
            sh 'echo "Deploy to QA environment"'
          }
        }

      }
    }

  }
}