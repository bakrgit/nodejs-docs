import QuestionHeader from './QuestionHeader'
import GuidedLesson from './GuidedLesson'
import InteractivePlayground from './InteractivePlayground'
import CodeExample from './CodeExample'
import ProductionScenario from './ProductionScenario'
import InterviewAnswers from './InterviewAnswers'
import FollowUpQuestions from './FollowUpQuestions'
import ArticleFooter from './ArticleFooter'
import ProductionFailureLab from '../interactive/ProductionFailureLab'

export default function QuestionArticle({ question, code, playground, failureLab, bookmarked, onBookmark, done, onDone, previous, next, onNavigate }) {
  return <article id="question"><QuestionHeader question={question} bookmarked={bookmarked} onBookmark={onBookmark}/><GuidedLesson question={question}/><InteractivePlayground config={playground}/><CodeExample code={code}/><ProductionScenario scenario={question.scenario} mistakes={question.mistakes}/><ProductionFailureLab lab={failureLab}/><InterviewAnswers arabic={question.arabicAnswer} english={question.englishAnswer}/><FollowUpQuestions items={question.followups}/><ArticleFooter done={done} onDone={onDone} previous={previous} next={next} onNavigate={onNavigate}/></article>
}
